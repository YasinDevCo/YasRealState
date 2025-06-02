// import BuyResidentialsPage from "@/template/BuyResidentialsPage";

// async function BuyResidentials({ searchParams }) {
//   // بهتر است در کامپوننت های سرورساید از ای پی آی روت استفاده نکنیم(این مورد حالت تمرینی دارد)
//   const res = await fetch("/api/profile", {
//     cache: "no-store",
//   });

//   const data = await res.json();

//   if (data?.error) return <h3>مشکلی پیش آمده است</h3>;

//   let finalData = data?.data;

//   if (searchParams.category) {
//     finalData = finalData.filter((i) => i.category === searchParams.category);
//   }

//   return <BuyResidentialsPage data={finalData} />;
// }

// export default BuyResidentials;
// app/buy-residential/page.jsx

import Profile from "@/models/Profile";
import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import connectDB from "@/utils/connectDB";

async function BuyResidentials({ searchParams }) {
  await connectDB();

  let profiles = await Profile.find().lean();

  if (searchParams?.category) {
    profiles = profiles.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialsPage data={JSON.parse(JSON.stringify(profiles))} />;
}

export default BuyResidentials;
