import React, { FC, useMemo } from "react"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useGetFilmsQuery } from "../../app/services/films"
import { FilmModel } from "../../app/models/films.interface"
import { useNavigate } from "../../router"
import PageTitle from "../../common/PageTitle"
import AppLoader from "../../common/AppLoader"
import { formatDate } from "../../utils/monthNames"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setSortConfig } from "../../app/slices/sort"
import SortableHeaderCell from "../../common/SortableHeaderCell"

export const Loader = () => "Route loader"
export const Action = () => "Route action"
export const Catch = () => <div>Something went wrong...</div>

export const Pending = () => <div>Loading...</div>

const StarWarsFilms: FC = () => {
  const dispatch = useAppDispatch()
  const sortConfig = useAppSelector((state) => state.sort)

  const navigate = useNavigate()
  const goToFilm = (id: number) =>
    navigate("/films/:id", { params: { id: `${id}` } })
  const { data, isError, isFetching } = useGetFilmsQuery()

  const sortedData: FilmModel[] | undefined = useMemo(() => {
    if (!data || !sortConfig) return data?.results

    const sortedFilms: FilmModel[] = [...data.results].sort((a, b) => {
      // @ts-expect-error
      if (a[sortConfig.field] < b[sortConfig.field]) {
        return sortConfig.direction === "ascending" ? -1 : 1
      }
      // @ts-expect-error
      if (a[sortConfig.field] > b[sortConfig.field]) {
        return sortConfig.direction === "ascending" ? 1 : -1
      }
      return 0
    })

    return sortedFilms
  }, [data, sortConfig])

  if (!data && isFetching) return <AppLoader />
  if (isError) return <div>Oh no, there was an error</div>

  return (
    <>
      <PageTitle>Films</PageTitle>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <SortableHeaderCell field="release_date">
                Release Date
              </SortableHeaderCell>
              <SortableHeaderCell field="episode_id">
                Episode Id
              </SortableHeaderCell>
              <Th>Director</Th>
              <Th>Story</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedData?.map((film: FilmModel) => (
              <Tr key={film.episode_id}>
                <Td>
                  {film.title}
                  <IconButton
                    aria-label={`Go to ${film.title}`}
                    variant="ghost"
                    colorScheme="brand"
                    ml={2}
                    onClick={() => goToFilm(film.id)}
                    icon={<ArrowForwardIcon w={5} h={5} />}
                  />
                </Td>
                <Td>{formatDate(film.release_date)}</Td>
                <Td>{film.episode_id}</Td>
                <Td>{film.director}</Td>
                <Td>
                  <p
                    style={{
                      width: "250px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {film.opening_crawl}
                  </p>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default StarWarsFilms
