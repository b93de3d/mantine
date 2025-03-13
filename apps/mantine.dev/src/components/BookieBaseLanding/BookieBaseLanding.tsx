import React, { ReactNode } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { IconMessage, IconMoneybag, IconReceipt, IconWand } from '@tabler/icons-react';
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core';

const PromoItem = ({
  Icon,
  title,
  description,
}: {
  Icon: typeof IconMoneybag;
  title: string;
  description: ReactNode;
}) => {
  const theme = useMantineTheme();
  return (
    <Stack p="md" h="100%" gap="sm">
      <Group gap="sm">
        <ThemeIcon variant="gradient" radius="xl" size="3rem">
          <Icon size="1.5rem" />
        </ThemeIcon>
        <Title order={3} ta="center" c={theme.colors.dark[6]}>
          {title}
        </Title>
      </Group>
      <Text fw={500} c={theme.colors.dark[6]} ta="justify">
        {description}
      </Text>
    </Stack>
  );
};

const BookieBaseLanding = () => {
  const theme = useMantineTheme();
  const primaryColors = theme.colors[theme.primaryColor];

  return (
    <div>
      {process.env.NEXT_PUBLIC_DEMO === 'true' && (
        <Script
          src="https://cdn.jsdelivr.net/npm/eruda"
          strategy="afterInteractive"
          onLoad={() => {
            (window as any).eruda.init();
            (window as any).eruda.show('console');
          }}
        />
      )}
      <div style={{ paddingTop: 0 }}>
        <Box
          style={{
            position: 'relative',
            width: '100%',
            height: '70vh',
            backgroundImage: `url('/curragh.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            p="md"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              background: 'rgba(0, 0, 0, 0.7)',
              backgroundImage: 'linear-gradient(45deg, #4c6ef5 0%, transparent 100%)',
            }}
          >
            <Container>
              {/* <Center></Center> */}
              <Stack gap={30}>
                <Title c={primaryColors[0]} fz={{ base: '3em', md: '2.1em' }}>
                  The Complete Bookmaker Solution
                </Title>
                <Text c={primaryColors[0]} fz={{ base: '1.3em', md: '1em' }}>
                  Simple yet powerful, BookieBase is a complete software solution for small to
                  medium sized bookmakers
                </Text>
                <Group>
                  <Link
                    passHref
                    legacyBehavior
                    href="mailto:contact@bookiebase.ie?subject=BookieBase%20Demo"
                  >
                    <Button component="a" color="orange" size="lg">
                      Request a Demo
                    </Button>
                  </Link>
                </Group>
              </Stack>
            </Container>
          </Box>
        </Box>
        <Container my={30}>
          <Grid align="stretch">
            <Grid.Col span={12}>
              <Stack>
                <Title order={2} c={theme.colors.dark[6]}>
                  The Case for BookieBase
                </Title>
                <Text c={theme.colors.dark[6]} ta="justify">
                  BookieBase is a complete software solution for small to medium sized bookmakers.
                  It is an ideal system for telephone and text betting operations and boutique firms
                  processing a relatively small number of bets. It is designed to work with or
                  without data feeds. While it can be enhanced with data feeds, it aims to operate
                  just as well without them. It provides a range of tools for making the entry and
                  settlement of manually created selections as straightforward and efficient as
                  possible. This enables “No Data” and “Low Data” operators to process quite a
                  number of bets without needing to pay for expensive data feeds on day one. As your
                  customer base and bet volume grow, you can add feeds and unlock a range of
                  at-scale features, such as automated settlement, automated text-to-bet processing
                  and BookieBase Sportsbook, a fully featured customer facing sportsbook.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ md: 6 }}>
              <PromoItem
                Icon={IconReceipt}
                title="Bet Processing"
                description={
                  <>
                    Build, enter and settle all popular bet types. Bets created with data feed
                    selections settle automatically.
                  </>
                }
              />
            </Grid.Col>
            <Grid.Col span={{ md: 6 }}>
              <PromoItem
                Icon={IconMoneybag}
                title="Payments"
                description={
                  <>Handle deposits and withdrawals seamlessly via a range of payment methods.</>
                }
              />
            </Grid.Col>
            <Grid.Col span={{ md: 6 }}>
              <PromoItem
                Icon={IconMessage}
                title="Messaging"
                description={
                  <>
                    Receive messages in a single unified place, from whatever messaging platforms
                    your customers prefer to use. We integrate with WhatsApp, SMS and others.
                  </>
                }
              />
            </Grid.Col>
            <Grid.Col span={{ md: 6 }}>
              <PromoItem
                Icon={IconWand}
                title="Text-to-Bet"
                description={
                  <>
                    BookieBase leverages AI to extract structured bet details from your customers
                    messages. The bet can then be processed automatically or passed along to staff
                    for final approval.
                  </>
                }
              />
            </Grid.Col>
          </Grid>
        </Container>
        {/* <Container my={30}>
            <Grid align="stretch">
              <Grid.Col span={6}>LOL</Grid.Col>
              <Grid.Col span={6}>HI</Grid.Col>
            </Grid>
          </Container> */}
        <Box
          style={{
            position: 'relative',
            width: '100%',
            height: '70vh',
            backgroundImage: `url('/grandstand.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            p="md"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              background: 'rgba(0, 0, 0, 0.6)',
              backgroundImage: 'linear-gradient(360deg, #4c6ef5 0%, transparent 100%)',
            }}
          >
            <Container>
              <Stack align="center">
                <Button
                  component="a"
                  variant="white"
                  size="xl"
                  href="mailto:contact@bookiebase.ie?subject=BookieBase%20Query"
                >
                  Get in Touch
                </Button>
              </Stack>
            </Container>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default BookieBaseLanding;
