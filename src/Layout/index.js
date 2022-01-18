import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";

import Home from "../home";
import Deck from "../deck";
import DeckList from "../home/DeckList";
import Study from "../study/Study";
import CreateDecks from "../createDecks";
import AddCard from "../card/AddCard";
import EditCard from "../card/EditCard";
import EditDecks from "../editDecks";
function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route path={"/decks/:deckId/cards/:cardId/edit"}>
            <EditCard />
          </Route>
          <Route path={"/decks/:deckId/cards/new"}>
            <AddCard />
          </Route>
          <Route path={"/decks/:deckId/edit"}>
            <EditDecks />
          </Route>
          <Route path={"/decks/:deckId/study"}>
            <Study />
          </Route>
          <Route path={"/decks/new"}>
            <CreateDecks />
          </Route>
          <Route path={"/decks/:deckId"}>
            <Deck />
          </Route>
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
