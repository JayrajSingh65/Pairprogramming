
import { Button } from "@/components/ui/button";
import { db } from "../db";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Room } from "@/db/schema";
import { GithubIcon } from "lucide-react";
import { getRooms } from "@/data-access/rooms";


function RoomCard({room}: {room: Room}) {
  return (
    <Card className="flex flex-col">
  <CardHeader>
    <CardTitle>{room.name}</CardTitle>
    <CardDescription className="block mb-2">{room.description}</CardDescription>
  </CardHeader>
  <CardContent>
  {room.githubrepo && (
          <Link
            href={room.githubrepo}
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon/>
            Github Project
          </Link>
        )}
  </CardContent>
  <CardFooter className="mt-auto">
  <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
  </CardFooter>
</Card>

  )
}


export default async function Home() {
  const rooms = await getRooms()
  return (
    <main className="min-h-screen py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl">Find Dev rooms</h1>

      <Button> <Link href="/create-room">
      Create Rooms
      </Link>
  
      </Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
      {rooms.map((room) => {
        return <RoomCard key={room.id}
          room={room}

        />
      })}
      </div>
    </main>
    
  );
}
