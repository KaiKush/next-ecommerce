import Link from "next/link";
import router from "next/router";

const ProductDetailScreen: React.FC = () => {
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
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <h2>Scroll View</h2>
      <button
        onClick={() => {
          router.push("/more", undefined, { scroll: false });
        }}
      >
        go to detail
      </button>
      <Link
        href="/shopping-list"
        scroll={false}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        Go to Other page
      </Link>
      {arr.map((index) => {
        return <p key={index}>{index}</p>;
      })}
    </div>
  );
};

export default ProductDetailScreen;
