"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
    date: string;
    text: string;
    author: string;
    email2: string;
    date2: string;
    text2: string;
    author2: string;
};

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        size: 60,
        header: "Status",
    },
    {
        accessorKey: "email",
        size: 150,
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "text",
        header: "Text",
        size: 200,
        cell: (row) => {
            return <div className="w-96">{row.row.original.text}</div>;
        },
    },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        accessorKey: "email2",
        header: "Email",
    },

    {
        accessorKey: "date2",
        header: "Date",
    },
    {
        accessorKey: "text2",
        header: "Text",
        cell: (row) => {
            return <div className="w-96">{row.row.original.text2}</div>;
        },
    },
    {
        accessorKey: "author2",
        header: "Author",
    },
];
