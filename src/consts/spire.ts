
export const SPIRE = {
    BASE_URL: 'https://ais.spire.com',
    HEADERS: {
        AUTHORIZATION_TOKEN_PREFIX: 'Bearer ',
        AUTHORIZATION_TOKEN: 'Authorization',
        POSTMAN_TOKEN: 'Postman-Token'
    },
    URLS: {
        VESSELS_URL: '/vessels/', // ?limit=1000&last_known_position_within=',
        SPECIFIC_VESSEL_URL: '/vessels/', // '/vessels/b4d14520-9652-46a9-a8f5-70d8eb4285b8
    },
    QUERY_PARAMS: {
        NEXT: 'next',
        LIMIT: 'limit',
        LAST_KNOWN_POSITION_WITHIN: 'last_known_position_within',
    },
    HARD_CODED_VALUES: {
        AUTHORIZATION_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6eyJpZCI6IjM4MCIsIm5hbWUiOiJEZWZlbnNlVGVjaHMgTHRkLiIsInV1aWQiOiIzODAifSwiaXNzIjoic3BpcmUuY29tIiwiaWF0IjoxNTIwNjM1Mjc1fQ.SgDoBuJY73IC3iiPvA50N5qUYxkb9MNYcZiJP8egDBQ',
        POSTMAN_TOKEN: 'e9e9428a-6858-4a95-8353-3af50237334a',
        COUNTRY_GEO_JSON: `{
            "type": "Polygon",
            "coordinates": [[
                [-78.20815210836236,2.421038321706246],
                [-80.20766382711236,3.715538911143474],
                [-84.55824976461236,1.279074722133197],
                [-83.65737085836236,-4.363567339968616],
                [-80.05385523336236,-4.8454042173797784],
                [-78.20815210836236,2.421038321706246]
            ]]
        }`
    }

};
