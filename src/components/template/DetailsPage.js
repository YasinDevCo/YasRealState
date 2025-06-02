import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { e2p, sp } from "@/utils/replaceNumber";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";
import styles from "@/template/DetailsPage.module.css";
import ItemList from "../modules/ItemList";
import Title from "../modules/Title";
import ShareButton from "../modules/ShareButton";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <div className={styles.itemList}> 
          <div>

          <Title>امکانات رفاهی</Title>
          <ItemList data={amenities} />
        </div>
          <div>

            <Title>قوانین</Title>
            <ItemList data={rules} />
          </div></div>


      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(phone)}
          </span>
        </div>
        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
        <ShareButton />
      </div>
    </div>
  );
}

export default DetailsPage;