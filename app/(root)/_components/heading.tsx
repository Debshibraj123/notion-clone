"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react"
import Link from "next/link";


export default function Heading() {
  const { isLoading, isAuthenticated } = useConvexAuth()
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & Plans, Unified. Welcome to <span className="underline">Motion</span>
      </h1>

      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Motion is the connected workspace where <br />
        better, faster work happens
      </h3>
      {isLoading && (
        <Spinner />
      )}
      {!isAuthenticated && !isLoading && (
        <Button>
          Get Notion Free
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}

      {isAuthenticated && !isLoading && (
        <Button>
          <Link href="/documents">
            Enter Motion
          </Link>
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}


    </div>
  )
}
