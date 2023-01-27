import { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '@api/(.*)': '<rootDir>src/infra/api/$1',
        '@mocks/(.*)': '<rootDir>src/infra/mocks/$1',
        '@interfaces/(.*)': '<rootDir>src/core/interfaces/$1',
        '@typing/(.*)': '<rootDir>src/core/domain/types/$1',
        '@models/(.*)': '<rootDir>src/core/domain/models/$1',
        '@services/(.*)': '<rootDir>src/core/services/$1',
        '@utils/(.*)': '<rootDir>src/core/utils/$1',
        '@components/(.*)': '<rootDir>src/ui/components/$1',
        '@contexts/(.*)': '<rootDir>src/ui/contexts/$1',
        '@routes/(.*)': '<rootDir>src/ui/routes/$1',
        '@pages/(.*)': '<rootDir>src/ui/pages/$1',
    },
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest"
    }
}

export default config;