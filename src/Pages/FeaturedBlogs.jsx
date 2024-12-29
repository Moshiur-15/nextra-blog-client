import axios from "axios";
import { DataType, Table } from "ka-table";
import {motion} from 'framer-motion'

import { SortingMode, SortDirection } from "ka-table/enums";
import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCALHOST}/feature`
        );
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div >
      <div className="py-16 bg-cyan-100/80 mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: {
              type: "spring",
              visualDuration: 0.4,
              bounce: 0.2,
              delay: 0.2,
            },
          }}
        >
          <h1 className="text-[26px] md:text-4xl hover:text-cyan-600 font-bold text-gray-800 text-center font-oswald">
            Featured Collection
          </h1>
        </motion.div>
      </div>
      <div className="container mx-auto min-h-[calc(100vh-500px)] my-10 border">
        {loading ? (
          <Loading />
        ) : (
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
                      rowData.idx % 2 === 0 ? "#F9FAFB" : "#FFFFFF",
                    padding: "12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease",
                    overflowX: "auto",
                  },
                }),
              },
            }}
          />
        )}
      </div>
    </div>
  );
}
