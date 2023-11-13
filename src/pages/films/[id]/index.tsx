import React, { FC } from "react"
import { useNavigate, useParams } from "../../../router"
import { useGetFilmQuery } from "../../../app/services/films"
import PageTitle from "../../../common/PageTitle"
import {
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { FilmModel } from "../../../app/models/films.interface"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import AppLoader from "../../../common/AppLoader"

export const Loader = () => "Route loader"
export const Action = () => "Route action"
export const Catch = () => <div>Something went wrong...</div>

export const Pending = () => <div>Loading...</div>

const Film: FC = (props) => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/films")
  }
  const { id }: { id: string } = useParams("/films/:id")
  // @ts-expect-error
  const { data: film, isError, isFetching } = useGetFilmQuery(id)
  if (!film && isFetching) return <AppLoader />
  if (isError) return <div>Oh no, there was an error</div>

  return (
    <>
      <IconButton
        aria-label="Back to films"
        variant="ghost"
        colorScheme="brand"
        ml={2}
        onClick={() => goBack()}
        icon={<ArrowBackIcon w={5} h={5} />}
      />
      <PageTitle>Film Details</PageTitle>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Release Date</Th>
              <Th>Episode Id</Th>
              <Th>Director</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr key={film?.episode_id}>
              <Td>{film?.title}</Td>
              <Td>{film?.release_date}</Td>
              <Td>{film?.episode_id}</Td>
              <Td>{film?.director}</Td>
            </Tr>
            <Tr>
              <Td colSpan={4} style={{ whiteSpace: "normal" }}>
                {film?.opening_crawl}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Film
