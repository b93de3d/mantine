import cx from 'clsx';
import { Box, Container, Group, RemoveScroll, Text } from '@mantine/core';
import { Logo } from '../Logo/Logo';
import { DiscordButton, TwitterButton } from '../SocialButton';
import { LinkedinButton } from '../SocialButton/SocialButton';
import { FOOTER_LINKS_DATA } from './data';
import { LinksGroup } from './LinksGroup/LinksGroup';
import classes from './Footer.module.css';

interface FooterProps {
  withNavbar?: boolean;
}

export function Footer({ withNavbar }: FooterProps) {
  const groups = FOOTER_LINKS_DATA.map((group) => (
    <LinksGroup data={group.data} title={group.title} key={group.title} />
  ));

  return (
    <div className={classes.root}>
      <div className={classes.spacer} />
      <Box
        mod={{ 'with-navbar': withNavbar }}
        className={cx(classes.wrapper, RemoveScroll.classNames.fullWidth)}
      >
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Logo />
              <Text className={classes.description} fz="sm">
                The complete bookmaker solution
              </Text>
            </div>

            {/* <div className={classes.groups}>{groups}</div> */}
          </div>

          <div className={classes.afterFooter}>
            <Group justify="space-between" wrap="wrap">
              <Text fz="xs" className={classes.afterFooterNote}>
                © BookieBase Limited {new Date().getFullYear()}
              </Text>
              <div className={classes.social}>
                {/* <DiscordButton className={classes.socialButton} /> */}
                {/* <LinkedinButton className={classes.socialButton} /> */}
                <TwitterButton className={classes.socialButton} />
              </div>
            </Group>
          </div>
        </Container>
      </Box>
    </div>
  );
}
