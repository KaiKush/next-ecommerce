import { GetServerSideProps } from "next";
import { useEffect } from "react";

interface SearchScreenProps {}

export const getServerSideProps: GetServerSideProps<
  SearchScreenProps
> = async () => {
  const options = null;

  return {
    props: {
      options,
    },
  };
};

const SearchScreen: React.FC = ({}: SearchScreenProps) => {
  const arr: number[] = [];
  for (let i = 1; i <= 1000; i++) {
    arr.push(i);
  }

  return (
    <div
      style={{
        height: "100vh",
        overflow: "auto",
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Scroll View</h2>
      {arr.map((index) => {
        return <p key={index}>{index}</p>;
      })}
    </div>
  );
};

export default SearchScreen;
