import { Badge } from "@/components/ui/badge";

export function TagList({tags}: {tags: string[] }){

    return (
        <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
                <Badge className="w-fit bg-purple-300" key={tag}>
                    {tag}

                </Badge>
            ))}
        </div>
    )

}