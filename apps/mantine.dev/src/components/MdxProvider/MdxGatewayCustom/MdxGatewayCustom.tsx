import React from 'react';
import {
  IconApi,
  IconChartBar,
  IconCheck,
  IconCircleCheck,
  IconClick,
  IconCreditCard,
  IconDeviceLaptop,
  IconInfoCircle,
  IconLock,
  IconSettings,
} from '@tabler/icons-react';
import { Anchor, Group, List, Paper, Stepper, ThemeIcon } from '@mantine/core';

const ListIcon = ({ Icon }: { Icon: typeof IconCircleCheck }) => (
  <ThemeIcon size={24} radius="xl">
    <Icon size="1rem" />
  </ThemeIcon>
);

export const KeyFeatures = () => {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >
      <List.Item icon={<ListIcon Icon={IconClick} />}>
        Embedded and hosted payment processing pages
      </List.Item>
      <List.Item icon={<ListIcon Icon={IconSettings} />}>
        Fully customisable provider routing
      </List.Item>
      <List.Item icon={<ListIcon Icon={IconCreditCard} />}>
        Simple integration of additional providers
      </List.Item>
      <List.Item icon={<ListIcon Icon={IconLock} />}>
        Secure storage of payment methods for repeat transactions
      </List.Item>
      <List.Item icon={<ListIcon Icon={IconChartBar} />}>
        Self service analytics and reporting
      </List.Item>
    </List>
  );
};

export const IntegratedProviders = () => (
  <Group gap="lg">
    {[
      '/docs/fire.svg',
      '/docs/trust.svg',
      '/docs/enumis.svg',
      '/docs/total_processing.svg',
      '/docs/paydotcom.svg',
      '/docs/aibms.png',
    ].map((src) => (
      <Paper p="md" h={90} bg="indigo.0">
        <img
          src={src}
          style={{ filter: 'grayscale(100%)', maxWidth: 150, objectFit: 'contain' }}
          alt="Provider"
          key={src}
          height="100%"
        />
      </Paper>
    ))}
  </Group>
);

export const IntegrationSteps = () => (
  <Stepper active={999} orientation="vertical">
    <Stepper.Step
      completedIcon={<IconApi />}
      label="Create a payment session"
      description={<>Use our API to create a new payments session</>}
    />
    <Stepper.Step
      completedIcon={<IconDeviceLaptop />}
      label="Display the payments page"
      description={
        <>Embed our payments portal in an iframe or direct the customer to our hosted solution</>
      }
    />
    <Stepper.Step
      completedIcon={<IconCheck />}
      label="Handle payment session result"
      description={
        <>
          We'll redirect the customer back to your site and send a webhook message containing
          details of the payment session result
        </>
      }
    />
  </Stepper>
);

export const NewSessionRequirements = () => (
  <div>
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon size={24} variant="light" radius="xl">
          <IconCheck size="1rem" />
        </ThemeIcon>
      }
    >
      <List.Item>An API Key</List.Item>
      <List.Item>
        The url of your BookieBase instance (
        <Anchor href="https://staging.bookiebase.ie/api/">
          https://staging.bookiebase.ie/api/
        </Anchor>{' '}
        for staging)
      </List.Item>
      <List.Item
        icon={
          <ThemeIcon size={24} variant="light" radius="xl">
            <IconInfoCircle size="1rem" />
          </ThemeIcon>
        }
      >
        In production, we will need to whitelist the IP addresses from which API requests are made
      </List.Item>
      {/* <List.Item>Your webhook secret</List.Item> */}
    </List>
  </div>
);
