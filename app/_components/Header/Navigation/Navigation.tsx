"use client";
// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { selectFavorites, selectIsLoggedIn } from 'redux/auth/selectors';
// import { Nav } from 'components/Header/Nav/Nav';
// import { AuthNav } from 'components/Header/AuthNav/AuthNav';
// import { UserNav } from 'components/Header/UserNav/UserNav';
// import { ShoppingBag } from '../ShoppingBag/ShoppingBag';
// import { Search } from 'components/Search/Search';
import { Link, type Locale } from "@/i18n.config";
 import { useLocale, useTranslations } from "next-intl";
import {
    Container,
    // IconSearch,
    NavBlock,
    // IconBookmark,
    // MobileContainer,
    // MobileNavBlock,
    // IconWrapper,
    // Count,
    // View,
} from './Navigation.styled';
import LocaleSwitcher from '../../LocaleSwitcher';
import Currency from '@/app/_components/Currency/Currency';

export const Navigation = () => {
    // const isLoggedIn = useSelector(selectIsLoggedIn);
    // const favorites = useSelector(selectFavorites);
        // const t = useTranslations("Header");
        const locale = useLocale() as Locale;

    // const [showSearchForm, setShowSearchForm] = useState(false);
    // const toggleSearchForm = () => {
    //     setShowSearchForm((state) => !state);
    // };
    // const closeSearchForm = () => {
    //     setShowSearchForm(false);
    // };

    return (<Container>
            {/* <Nav /> */}
            <NavBlock>
                <Currency />
                <LocaleSwitcher locale={locale} />

                {/* {!showSearchForm && (
                    <IconSearch
                        onClick={toggleSearchForm}
                        aria-label="Search"
                    />
                )}
                {showSearchForm && <Search onClose={closeSearchForm} />}

                <View>
                    {!showSearchForm && (
            <IconSearch onClick={toggleSearchForm} aria-label="Search" />
          )}
          {showSearchForm && <Search onClose={closeSearchForm} />}

                    {isLoggedIn ? <UserNav /> : <AuthNav />}

                    {isLoggedIn ? (
                        <Link to={'/user/favorites'}>
                            <IconWrapper>
                                <IconBookmark aria-label="Bookmark" />
                                {favorites.length > 0 && (
                                    <Count>{favorites.length}</Count>
                                )}
                            </IconWrapper>
                        </Link>
                    ) : (
                        <Link to={'/signin'}>
                            <IconWrapper>
                                <IconBookmark aria-label="Bookmark" />
                            </IconWrapper>
                        </Link>
                    )}
                </View>
                <ShoppingBag /> */}
            </NavBlock>
    </Container>
    );
};

// export const MobileNavigation = ({ toggleMobileMenu }: any) => {
    // const isLoggedIn = useSelector(selectIsLoggedIn);
    // const favorites = useSelector(selectFavorites);

    // const [showSearchForm, setShowSearchForm] = useState(false);
    // const toggleSearchForm = () => {
    //     setShowSearchForm((state) => !state);
    // };

    // return (
        // <MobileContainer>
            {/* <Nav /> */}
            // <MobileNavBlock>
                {/* {!showSearchForm && (
          <IconSearch onClick={toggleSearchForm} aria-label="Search" />
        )}
        {showSearchForm && (
          <Search
            onClose={toggleSearchForm}
            toggleMobileMenu={toggleMobileMenu}
          />
        )} */}

                {/* {isLoggedIn ? (
                    <Link to={'/user/favorites'} onClick={toggleMobileMenu}>
                        <IconWrapper>
                            <IconBookmark aria-label="Bookmark" />
                            {favorites.length > 0 && (
                                <Count>{favorites.length}</Count>
                            )}
                        </IconWrapper>
                    </Link>
                ) : (
                    <Link to={'/signin'} onClick={toggleMobileMenu}>
                        <IconWrapper>
                            <IconBookmark aria-label="Bookmark" />
                        </IconWrapper>
                    </Link>
                )} */}
//             </MobileNavBlock>
//         </MobileContainer>
//     );
// };
