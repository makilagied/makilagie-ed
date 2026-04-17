"use client";

import { useEffect, useState } from "react";

export function LiveDate() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 60000); // update every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
            })}
        </>
    );
}