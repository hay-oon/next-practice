import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="flex flex-col gap-10 justify-center items-center font-bold text-4xl animate-bounce h-screen">
      <h1>Product</h1>
      <p>{id}번 입니당</p>
    </div>
  );
};

export default Product;
