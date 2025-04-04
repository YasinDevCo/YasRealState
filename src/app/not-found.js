"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  return (
    <div className={"notFound"}>
      <div className="error-number">404</div>
      <h1 className="error-title">
        اوه نه! صفحه‌ای که دنبالش بودی پیدا نشد 😢
      </h1>
      <p className="error-description">
        شاید آدرس اشتباه تایپ شده یا ملک مورد نظر وجود نداره.
      </p>
      <Link href="/" className="go-home-btn">
        بازگشت به صفحه اصلی
      </Link>

      <style jsx>{``}</style>
    </div>
  );
}
