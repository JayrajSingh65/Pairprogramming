import Image from "next/image";
import { db } from "../db";
import { Item } from "@radix-ui/react-dropdown-menu";


export default async function Home() {
  const items = await db.query.testing.findMany();
  return (
    <main>
      {items.map((item) => {
      return <div key={item.id}>
        {item.name}

      </div>
})}
    </main>
    
  );
}
