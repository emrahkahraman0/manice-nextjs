"use client";
import { usePathname } from "next/navigation";

function Page() {
  const pathname = usePathname();
  return (
    <>
      <div id="page_banner">
        <div className="text container">
          <h6>{pathname}</h6>
        </div>
        {/*text*/}
      </div>
      {/*page_banner#*/}
    </>
  );
}

export default Page;
