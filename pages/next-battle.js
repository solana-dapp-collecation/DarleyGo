import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../containers/section/Header'
import Content from '../containers/section/Content';
import NavBox from '../containers/section/NavBox';
import NextBattle from '../containers/section/NextBattle';
import { getRaces } from '../libs/api';

export default function NextBattlePage({races}) {
  const { t } = useTranslation('common');
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{t('appName')}</title>
        <meta name="description" content={t('appDescription')} />
      </Head>
      <Header/>
      <Content>
        <NavBox/>
        <NextBattle races={races}/>
      </Content>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  var races = await getRaces();
  //console.log ( races );
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
      races,
    },
    revalidate: 30
  };
}
