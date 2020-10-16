import React from "react";
import { Card } from "antd";

export default function DataCard() {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        title="Test card"
        style={{ width: 250, height: 450 }}
        cover={<img alt="random" src="https://picsum.photos/150" />}
      >
        <Meta title="Card info" description="www.cards.com" />
      </Card>
    </div>
  );
}
