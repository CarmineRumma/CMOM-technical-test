// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 10:28.
// 
// 

import { ReactElement, useState } from 'react';
import { useCoinApi } from '../shared/CoinApi';
import { coinDetailURL } from '../shared/Endpoints';
import ReactHtmlParser from 'react-html-parser';
import {
  Grid,
  List,
  Image,
  Divider,
  GridColumn,
  Breadcrumb,
  Label,
  Header,
  Icon,
  Container,
} from 'semantic-ui-react';

import LoadingSpinner from './LoadingSpinner';
import { Link, useParams } from 'react-router-dom';
import { CoinDetailRawResponse } from '../shared/Interfaces';

export default function CoinDetails(): ReactElement {
  const { coinId }  = useParams<{ coinId: string }>();
  const coinURL     = coinDetailURL('coins', coinId).href;
  const coin        = useCoinApi<CoinDetailRawResponse>('GET', coinURL)[0];
  const [readMore, setReadMore] = useState(false);

  const formatCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'Eur',
  });

  if (!coin) {
    return <LoadingSpinner name={coinId.toUpperCase()} />;
  }

  const descr = coin.description
  ? ReactHtmlParser(`${coin.description.en.substring(0, 500)}...`)
  : 'Description not available';

  const readMoreSwitch = readMore ? 'Show less' : 'Read more';


  return (
    <>
      <Breadcrumb size="small">
        <Link to="/coins">
          <Breadcrumb.Section >Cryptocurrencies</Breadcrumb.Section>
        </Link>
        <Breadcrumb.Divider icon="right chevron" />
        <Breadcrumb.Section active>{coin.name}</Breadcrumb.Section>
      </Breadcrumb>
      <List verticalAlign="middle">
        <List.Item id="divide">
          <Image avatar src={coin.image.large} />
          <List.Content>
            <List.Header>
              {coin.name}{' '}
              <small>
                <span>{coin.symbol.toUpperCase()}</span>
              </small>
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
      <Grid padded="vertically" centered divided="vertically" >
        <Grid.Row columns={3}>
          <Grid.Column>
            <List>
              <List.Item>
                <Label>Hashing Alghorithm {coin.hashing_algorithm}</Label>
              </List.Item>
              <List.Item>
                <a href={coin.links.homepage[0]}>
                  <Label content="Website" icon="linkify" />
                </a>
              </List.Item>
              <List.Item>
                <a href={coin.links.repos_url.github[0]}>
                  <Label content="Source code" icon="github" />
                </a>
              </List.Item>
            </List>
          </Grid.Column>
          <GridColumn textAlign="right">
            <List>
              <List.Item>
                <h4>
                  {coin.name} price ({coin.symbol.toUpperCase()})
                </h4>
              </List.Item>
              <List.Item>
                <h3>
                  {formatCurrency.format(coin.market_data.current_price.eur)}
                </h3>
              </List.Item>
            </List>
          </GridColumn>
          <GridColumn textAlign="right">
            <List>
              <List.Item>
                  <h4>
                    Market Cap in Euro
                  </h4>
                </List.Item>
                <List.Item>
                  <h3>
                  {formatCurrency.format(coin.market_data.market_cap.eur)}
                  </h3>
                </List.Item>
            </List>
          </GridColumn>
        </Grid.Row>
      </Grid>
      <Divider horizontal>
        <Header as="h4">
          <Icon name='paragraph' />
          Coin Description
        </Header>
      </Divider>
      <Container style={{ textAlign: 'justify' }}>
        {coin.description && readMore
          ? ReactHtmlParser(coin.description.en)
          : descr}
        {coin.description.en.length > 500 ? (
          <button className="btn" onClick={() => setReadMore(!readMore)}>
            {readMoreSwitch}
          </button>
        ) : (
          ''
        )}
      </Container>
    </>
  );
}
