'use client';
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
const ShowMore = ({pageNumber, isNext} : ShowMoreProps) => {
    const router = useRouter();
    const handleNavigation = () => {
        alert("handle show more")
    }
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton 
                    title = "show more"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore;