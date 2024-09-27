
import { getRoom } from "@/data-access/rooms";
import { TagList } from "@/app/components/tags-list";
import { GithubIcon, Tags } from "lucide-react";
import { splitTags } from "../../../../lib/utils";
import Link from "next/link";
import { unstable_noStore } from "next/cache";
import { DevFinderVideo } from "./video-player";

export default async function RoomPage(props: { params: { roomId: string } }) {
  unstable_noStore();
  const roomId = props.params.roomId;

  const room = await getRoom(roomId);

  if (!room) {
    return <div>No room of this ID found</div>;
  }

  return (
    <div className="grid grid-cols-4 min-h-screen">
      <div className="col-span-3 p-4 pr-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 min-h-screen">
         <DevFinderVideo room={room}/>
        </div>
      </div>

      <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-base">{room?.name}</h1>

          {room.githubrepo && (
            <Link
              href={room.githubrepo}
              className="flex items-center gap-2 text-center text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              Github Project
            </Link>
          )}

          <p className="text-base text-blue-200">{room?.description}</p>

          <TagList tags={splitTags(room.tags)} />


          
        </div>
      </div>
    </div>
  );
}