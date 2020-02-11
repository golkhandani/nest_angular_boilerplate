import { Sequelize } from 'sequelize-typescript';
import { UserEntity } from '@shared/models';
import { PhoneVerificationEntity, RefreshTokenEntity } from '@services/authentication/models';

export const postgresProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
              dialect: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'postgres',
              database: 'test',
            });
            sequelize.addModels([
                UserEntity,
                PhoneVerificationEntity,
                RefreshTokenEntity]);
            await sequelize.sync();
            return sequelize;
        },
    },
];