import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { Button, Footer, Header, EntryHeader, Main, SEO } from 'components';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { pageTitle } from 'utils';
import styles from 'styles/pages/_404.module.scss';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <SEO title={pageTitle(generalSettings)} />

      <Header />

      <Main>
        <EntryHeader title="Wrong turn. Do a U-ee!" />
        <div className="container small">
          <p className="text-center">
Oops, you did it again!          </p>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();

              router.push({
                pathname: '/search',
                query: { searchQuery: searchQuery },
              });
            }}
          >
            <label htmlFor="404-search-input" className="sr-only">
              Search
            </label>
            <input
              id="404-search-input"
              name="404-search-input"
              className={styles['search-input']}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Button styleType="secondary" role="submit">
              Search
            </Button>
          </form>
        </div>
      </Main>
    sourceUrl: '/static/dog.jpeg',
    mediaDetails: { width: 1200, height: 600 },
    altText: 'Blog Banner',
  };

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
