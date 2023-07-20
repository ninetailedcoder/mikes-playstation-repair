import React, { Component } from "react";
import { Accordion, Card, CardBody, CardHeader, Button } from "reactstrap";

class AccordionCards extends Component {
  state = {
    activeCard: null,
  };

  handleClick = (key) => {
    this.setState({ activeCard: key });
  };

  render() {
    const cards = [
      {
        key: "1",
        title: "Will i Lose my data?",
        content: "Only if your system settings need to be reset OR your hard drive is at fault. We will always bring this to your attention before moving forward with any repairs.",
      },
      {
        key: "2",
        title: "What is your turn-around time?",
        content: "If parts need to be ordered, the wait may  need to be an additional 5-7 business days",
      },
      {
        key: "3",
        title: "Do you guys work for Sony?",
        content: "We ARE NOT affiliated with SONY in any way. We offer these services as our own entity, which is Mike's PS3/PS4 Repair.",
      },
    ];

    return (
      <div>
        {cards.map((card) => (
          <Accordion key={card.key}>
            <Card>
              <CardHeader>
                <Button
                  variant="link"
                  onClick={() => this.handleClick(card.key)}
                >
                  {card.title}
                </Button>
              </CardHeader>
              <CardBody
                hidden={card.key !== this.state.activeCard}
              >
                {card.content}
              </CardBody>
            </Card>
          </Accordion>
        ))}
      </div>
    );
  }
}

export default AccordionCards;
