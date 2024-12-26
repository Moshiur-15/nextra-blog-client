import axios from "axios";
import { DataType, Table } from 'ka-table';

import { SortingMode, SortDirection } from "ka-table/enums";
import React, { useEffect, useState } from "react";
export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCALHOST}/feature`
        );
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto min-h-[calc(100vh-500px)] my-10 border">
      <Table
          columns={[
            {
              key: "title",
              sortDirection: SortDirection.Ascend,
              style: {
                width: 680,
                textAlign: "center",
                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Title",
            },
            {
              key: "category",
              sortDirection: SortDirection.Ascend,
              style: {
                width: 380,
                textAlign: "center",
                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Category",
            },
            {
              key: "deadline",
              sortDirection: SortDirection.Ascend,
              style: {
                width: 450,
                textAlign: "center",
                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Deadline",
            },
            {
              key: "blogPostUser.displayName",
              sortDirection: SortDirection.Ascend,
              style: {
                width: 520,
                textAlign: "center",
                padding: "12px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              },
              title: "Bloger Name",
            },
          ]}
          data={blogs}
          rowKeyField="_id"
          sortingMode={SortingMode.Single}
          childComponents={{
            dataRow: {
              elementAttributes: ({ rowData }) => ({
                style: {
                  backgroundColor:
                    rowData.idx % 2 === 0
                      ? "#F9FAFB"
                      : "#FFFFFF", 
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  transition: "background-color 0.3s ease",
                  overflowX: "auto"
                },
               
              }),
            },
          }}
        />
    </div>
  );
}
