import { SelectContent, Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Footer() {
    return(
        <>
            <div className="border-t-1">
                <div className="bottom-0 right-0 m-4 w-auto">
                    <Select>
                        <SelectTrigger className="w-auto">
                            <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fr">🇫🇷</SelectItem>
                            <SelectItem value="en">🇬🇧</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </>
    )
};