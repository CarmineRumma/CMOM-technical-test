// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 10:25.
// 
// 

import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { useCoinApi } from '../shared/CoinApi';
import { coinListURL } from '../shared/Endpoints';
import {
  Container,
  Pagination,
  PaginationProps,
  Table,
} from 'semantic-ui-react';

import LoadingSpinner from './LoadingSpinner';
import CoinListItem from './CoinListItem';
import { CoinsRawResponse } from '../shared/Interfaces';

export default function CoinsMarketList(): ReactElement {
  const [currency]  = useState("eur");
  const [perPage]   = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const coinsURL = coinListURL('coins/markets', currency, perPage, currentPage)
    .href;
  const [coins] = useCoinApi<CoinsRawResponse[]>('GET', coinsURL);

  if (!coins) {
    return <LoadingSpinner name="Coins" />;
  }
  console.log(coins);

  // handle pagination
  const onPageChange = (e: SyntheticEvent, pageInfo: PaginationProps) => {
    if (pageInfo.activePage) setCurrentPage(+pageInfo.activePage);
  };

  return (
    <>
      <Table basic="very" singleLine selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="2" textAlign="center">
              #
            </Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Current Price</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">High 24 hour Price</Table.HeaderCell>
            <Table.HeaderCell textAlign="right">Low 24 hour Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {coins.map((coin) => (
            <CoinListItem key={coin.id} coin={coin} currency={currency} />
          ))}
        </Table.Body>
      </Table>
      <Container className="ui center aligned container">
        <Pagination
          onPageChange={onPageChange}
          activePage={currentPage}
          siblingRange={2}
          totalPages={25}
        ></Pagination>
      </Container>
    </>
  );
}
