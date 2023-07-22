import React, { Component } from "react";
import { Accordion, Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";

class AccordionCards extends Component {
  state = {
    activeCard: null,
  };

  handleClick = (key) => {
    this.setState((prevState) => ({
      activeCard: prevState.activeCard === key ? null : key,
    }));
  };

  render() {
    const cards = [
        {
            key: "1",
            title: "Will I Lose my data?",
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
          {
            key: "4",
            title: "Do you provide warranties?",
            content: "We offer warranties on most replacement parts, which are typically up to 30 days or more unless otherwise noted. NOTE: We may need to remove the manufacturer's warranty sticker. Doing so will void warranty you may have.",
          },
          {
            key: "5",
            title: "How long have you guys been around?",
            content: "We have been repairing Playstations since 2009!",
          },
          {
            key: "6",
            title: "Where are you located?",
            content: "We are located in Downtown St. Paul. Please call ahead to schedule an appointment.",
          },
          {
            key: "7",
            title: "Can I ship my unit from out of state?",
            content: "YES; please refer to the contact us/SHIPPING page. You will be responsible for shipping costs both ways.",
          },
          {
            key: "8",
            title: "Can I just stop by at anytime?",
            content: "We are usually very flexible with drop-off times as long as we know to expect you. Feel free to call or email us and let us know when you would like to come in.",
          },
          {
            key: "9",
            title: "How can I reach you guys?",
            content: "You can give us a call; (612) 462-0857",
          },
          {
            key: "10",
            title: "What forms of payment do you take?",
            content: "We accept cash, all major credit cards (Visa, Mastercard, AMEX, Discover), PayPal and Cryptocurrency (BTC, ETH, LTC, And many more. Cryptocurrencies & PayPal is one of the safest ways to pay for items and accept payments.",
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
              <Collapse isOpen={this.state.activeCard === card.key}>
                <CardBody>
                  {card.content}
                </CardBody>
              </Collapse>
            </Card>
          </Accordion>
        ))}
      </div>
    );
  }
}

export default AccordionCards;
