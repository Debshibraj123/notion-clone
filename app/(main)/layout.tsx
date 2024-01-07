"use client"
import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";

const MainLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {

    const { isAuthenticated, isLoading } = useConvexAuth();
    
    if(isLoading) {
      return (
       <div className="h-full flex items-center justify-center">
         <Spinner size="lg"/>
       </div>  
      )
    }

    if(isAuthenticated) {
        return redirect("/documents");
    }

    return (
        <div className="h-full flex ">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">
            {children}
            </main>
        </div>

    )

}

export default MainLayout