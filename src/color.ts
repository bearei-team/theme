import {ThemeOptions} from './core';

export type Primary =
    | 'primary0'
    | 'primary10'
    | 'primary20'
    | 'primary30'
    | 'primary40'
    | 'primary50'
    | 'primary60'
    | 'primary70'
    | 'primary80'
    | 'primary90'
    | 'primary95'
    | 'primary98'
    | 'primary100';

export type Secondary =
    | 'secondary0'
    | 'secondary10'
    | 'secondary20'
    | 'secondary30'
    | 'secondary40'
    | 'secondary50'
    | 'secondary60'
    | 'secondary70'
    | 'secondary80'
    | 'secondary90'
    | 'secondary95'
    | 'secondary98'
    | 'secondary100';

export type Tertiary =
    | 'tertiary0'
    | 'tertiary10'
    | 'tertiary20'
    | 'tertiary30'
    | 'tertiary40'
    | 'tertiary50'
    | 'tertiary60'
    | 'tertiary70'
    | 'tertiary80'
    | 'tertiary90'
    | 'tertiary95'
    | 'tertiary98'
    | 'tertiary100';

export type Error =
    | 'error0'
    | 'error10'
    | 'error20'
    | 'error30'
    | 'error40'
    | 'error50'
    | 'error60'
    | 'error70'
    | 'error80'
    | 'error90'
    | 'error95'
    | 'error98'
    | 'error100';

export type Neutral =
    | 'neutral0'
    | 'neutral4'
    | 'neutral6'
    | 'neutral10'
    | 'neutral12'
    | 'neutral17'
    | 'neutral20'
    | 'neutral22'
    | 'neutral24'
    | 'neutral30'
    | 'neutral40'
    | 'neutral50'
    | 'neutral60'
    | 'neutral70'
    | 'neutral80'
    | 'neutral87'
    | 'neutral90'
    | 'neutral92'
    | 'neutral94'
    | 'neutral95'
    | 'neutral96'
    | 'neutral98'
    | 'neutral100';

export type NeutralVariant =
    | 'neutralVariant0'
    | 'neutralVariant10'
    | 'neutralVariant20'
    | 'neutralVariant30'
    | 'neutralVariant40'
    | 'neutralVariant50'
    | 'neutralVariant60'
    | 'neutralVariant70'
    | 'neutralVariant80'
    | 'neutralVariant90'
    | 'neutralVariant95'
    | 'neutralVariant98'
    | 'neutralVariant100';

export interface Color {
    error: Record<Error, string>;
    neutral: Record<Neutral, string>;
    neutralVariant: Record<NeutralVariant, string>;
    primary: Record<Primary, string>;
    rgba: (color: string, opacity: number) => string;
    secondary: Record<Secondary, string>;
    source: string;
    tertiary: Record<Tertiary, string>;
}

export type ColorOptions = Required<Pick<ThemeOptions, 'color'>>;

export const color = ({color}: ColorOptions): Color => {
    const transparentRGB = (color: string, opacity = 1) =>
        `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
            color.slice(5, 7),
            16,
        )}, ${opacity})`;

    const themeColor = {
        lightTeal: {
            error: {
                error0: '#000000',
                error10: '#410002',
                error20: '#690005',
                error30: '#93000A',
                error40: '#BA1A1A',
                error50: '#DE3730',
                error60: '#FF5449',
                error70: '#FF897D',
                error80: '#FFB4AB',
                error90: '#FFDAD6',
                error95: '#FFEDEA',
                error98: '#FFF8F7',
                error100: '#FFFFFF',
            },
            neutral: {
                neutral0: '#000000',
                neutral4: '#0B0F10',
                neutral6: '#111415',
                neutral10: '#191C1D',
                neutral12: '#1D2021',
                neutral17: '#272A2C',
                neutral20: '#2E3132',
                neutral22: '#323536',
                neutral24: '#363A3B',
                neutral30: '#444748',
                neutral40: '#5C5F60',
                neutral50: '#757779',
                neutral60: '#8E9192',
                neutral70: '#A9ABAD',
                neutral80: '#C5C7C8',
                neutral87: '#D8DADB',
                neutral90: '#E1E3E4',
                neutral92: '#E6E8E9',
                neutral94: '#ECEEEF',
                neutral95: '#EFF1F2',
                neutral96: '#F2F4F5',
                neutral98: '#F8FAFB',
                neutral100: '#FFFFFF',
            },
            neutralVariant: {
                neutralVariant0: '#000000',
                neutralVariant10: '#141D1F',
                neutralVariant20: '#293234',
                neutralVariant30: '#3F484B',
                neutralVariant40: '#576063',
                neutralVariant50: '#70797C',
                neutralVariant60: '#899295',
                neutralVariant70: '#A4ADB0',
                neutralVariant80: '#BFC8CB',
                neutralVariant90: '#DBE4E7',
                neutralVariant95: '#E9F2F5',
                neutralVariant98: '#F2FBFE',
                neutralVariant100: '#FFFFFF',
            },
            primary: {
                primary0: '#000000',
                primary10: '#001F26',
                primary20: '#003640',
                primary30: '#004E5C',
                primary40: '#00687A',
                primary50: '#008399',
                primary60: '#009EB9',
                primary70: '#2DBAD8',
                primary80: '#56D6F4',
                primary90: '#ACECFF',
                primary95: '#D8F6FF',
                primary98: '#F0FBFF',
                primary100: '#FFFFFF',
            },
            secondary: {
                secondary0: '#000000',
                secondary10: '#061F24',
                secondary20: '#1D343A',
                secondary30: '#334A51',
                secondary40: '#4B6269',
                secondary50: '#637B82',
                secondary60: '#7D959C',
                secondary70: '#97AFB7',
                secondary80: '#B2CBD2',
                secondary90: '#CEE7EF',
                secondary95: '#DCF5FD',
                secondary98: '#F0FBFF',
                secondary100: '#FFFFFF',
            },
            source: '#88C0D0',
            tertiary: {
                tertiary0: '#000000',
                tertiary10: '#131937',
                tertiary20: '#282F4D',
                tertiary30: '#3F4565',
                tertiary40: '#575D7E',
                tertiary50: '#6F7598',
                tertiary60: '#898FB3',
                tertiary70: '#A4A9CE',
                tertiary80: '#BFC4EB',
                tertiary90: '#DDE1FF',
                tertiary95: '#F0EFFF',
                tertiary98: '#FBF8FF',
                tertiary100: '#FFFFFF',
            },
        },
    };

    return {...themeColor[color], rgba: transparentRGB};
};
