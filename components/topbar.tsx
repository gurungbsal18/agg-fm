import React from "react";

export default function TopBar() {
  const data = [
    {
      id: 1,
      content: "+60 12‑632 3277",
      icon: "",
    },
    {
      id: 2,
      content: "contact@aggsfm.com",
    },
  ];
  return (
    <div className="bg-primary py-2 text-sm">
      <div className="container text-white">
        <div className="flex gap-4">
          {data.map((list) => {
            return (
              <div key={list.id}>
                <p>{list.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
