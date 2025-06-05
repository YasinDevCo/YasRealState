
import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import { getProfileData } from "src/lib/getProfile";

async function BuyResidentials({ searchParams }) {
  const { error, data } = await getProfileData();  
  if (error) return <h3>مشکلی پیش آمده است</h3>;

  let finalData = data || [];

  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialsPage data={finalData} />;
}

export default BuyResidentials;
