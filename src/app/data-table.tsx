"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    ColumnPinningState,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const columnPinningState: ColumnPinningState = {
        left: ["status", "email"],
        right: [],
    };

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            columnPinning: columnPinningState,
        },
    });

    return (
        <div className="rounded-md border overflow-x-auto">
            <Table className="min-w-full">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="bg-white">
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead
                                        key={header.id}
                                        style={{
                                            backgroundColor: "white",
                                            left: header.column.getIsPinned()
                                                ? `${header.getStart()}px`
                                                : undefined,
                                            width: header.column.getSize()
                                                ? `${header.getSize()}px`
                                                : undefined,
                                            position:
                                                header.column.getIsPinned()
                                                    ? "sticky"
                                                    : undefined,
                                        }}
                                        className="w-full"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </TableHead>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell
                                        key={cell.id}
                                        style={{
                                            backgroundColor: "white",
                                            left: cell.column.getIsPinned()
                                                ? `${cell.column.getStart()}px`
                                                : undefined,
                                            width: cell.column.getSize()
                                                ? `${cell.column.getSize()}px`
                                                : undefined,
                                            position: cell.column.getIsPinned()
                                                ? "sticky"
                                                : undefined,
                                        }}
                                        className="max-h-24"
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="text-center"
                            >
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
