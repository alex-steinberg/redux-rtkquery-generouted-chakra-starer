import React, { ReactNode } from "react"
import { Th, IconButton } from "@chakra-ui/react"
import { ChevronUpIcon, ChevronDownIcon, UpDownIcon } from "@chakra-ui/icons"
import { useSelector, useDispatch } from "react-redux"
import { setSortConfig } from "../app/slices/sort"
import { RootState } from "../app/store" // Adjust the import path as needed

const SortableHeaderCell = ({
  field,
  children,
}: {
  field: string
  children: ReactNode
}) => {
  const dispatch = useDispatch()
  const sortConfig = useSelector((state: RootState) => state.sort)

  const handleSort = () => {
    dispatch(
      setSortConfig({
        field,
        direction:
          sortConfig.field === field && sortConfig.direction === "descending"
            ? "ascending"
            : "descending",
      }),
    )
  }

  const sortIcon =
    sortConfig.field === field ? (
      sortConfig.direction === "ascending" ? (
        <ChevronUpIcon w={4} h={4} />
      ) : (
        <ChevronDownIcon w={4} h={4} />
      )
    ) : (
      <UpDownIcon w={3} h={3} />
    )

  return (
    <Th>
      {children}
      <IconButton
        aria-label={`Sort by ${field}`}
        variant="ghost"
        colorScheme="brand"
        size="xs"
        onClick={handleSort}
        icon={sortIcon}
      />
    </Th>
  )
}

export default SortableHeaderCell
