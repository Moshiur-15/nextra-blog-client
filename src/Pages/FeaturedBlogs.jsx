import axios from "axios";
import { Table } from "ka-table";
import { motion } from "framer-motion";
import { SortingMode, SortDirection } from "ka-table/enums";
import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";

export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState([]); // Corrected type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_LOCALHOST}/feature`
        );
        if (!data || !Array.isArray(data)) return; // Prevent invalid data state
        setBlogs(data);
      } catch (err) {
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="pt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0.2, delay: 0.2 },
          }}
        >
          <h1 className="text-[26px] md:text-4xl font-bold text-gray-800 text-center">
            ⭐Featured Collection
          </h1>
          <p className="text-lg text-center text-gray-700 mt-4 max-w-lg mx-auto">
            Browse through our handpicked collection, showcasing the best and
            most popular items of the season.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto min-h-[calc(100vh-500px)] my-10">
        {loading ? (
          <Loading />
        ) : error ? (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        ) : (
          <div className="border-t border-l overflow-x-auto">
            <Table
              columns={[
                {
                  key: "title",
                  title: "Title",
                  sortDirection: SortDirection.Ascend,
                  style: columnStyle(680),
                },
                {
                  key: "category",
                  title: "Category",
                  sortDirection: SortDirection.Ascend,
                  style: columnStyle(380),
                },
                {
                  key: "deadline",
                  title: "Deadline",
                  sortDirection: SortDirection.Ascend,
                  style: columnStyle(450),
                },
                {
                  key: "blogPostUser.displayName",
                  title: "Blogger Name",
                  sortDirection: SortDirection.Ascend,
                  style: columnStyle(520),
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
                        rowData.idx % 2 === 0 ? "#FAF5E5" : "#FFFFFF",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      transition: "background-color 0.3s ease",
                    },
                  }),
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Extracted column styling for better readability
const columnStyle = (width) => ({
  width,
  textAlign: "center",
  padding: "12px",
  borderRight: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
});
