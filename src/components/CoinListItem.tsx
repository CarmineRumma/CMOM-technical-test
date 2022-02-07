// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 10:29.
// 
// 

import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, List, Image } from 'semantic-ui-react';
import { CoinsRawResponse } from '../shared/Interfaces';

interface Props {
  coin: CoinsRawResponse;
  currency: string;
}

export default function CoinListItem(props: Props): ReactElement {
  const coin = props.coin;
  const history = useHistory();

  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: props.currency,
  });

  const onGoToDetail = () => {
    history.push(`/coins/${coin.id}`);
  };

  return (
    <Table.Row className="enlarge">
      <Table.Cell textAlign="center">
        
      </Table.Cell>
      <Table.Cell>{coin.market_cap_rank}</Table.Cell>
      <Table.Cell>
        <List verticalAlign="middle">
          <List.Item onClick={onGoToDetail} style={{ cursor: 'pointer' }}>
            <Image avatar src={coin.image} />
            <List.Content>
              <List.Header>
                {coin.name} <span id="grey"> {coin.symbol.toUpperCase()}</span>
              </List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Table.Cell>
      <Table.Cell className="bold" textAlign="center">
        {formatCurrency.format(coin.current_price)}
      </Table.Cell>
      <Table.Cell textAlign="right">
        {formatCurrency.format(coin.high_24h)}
      </Table.Cell>
      <Table.Cell textAlign="right">
        {formatCurrency.format(coin.low_24h)}
      </Table.Cell>
    </Table.Row>
  );
}

