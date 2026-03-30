import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { IS_DEV_ENV } from './libs/common/utils/is-dev';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './libs/redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProviderModule } from './auth/provider/provider.module';
import { MailModule } from './auth/mail/mail.module';
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module';
import { PasswordRecoveryModule } from './auth/password-recovery/password-recovery.module';
import { TwoFactorAuthModule } from './auth/two-factor-auth/two-factor-auth.module';
import { MarketDataModule } from './market-data/market-data.module';
import { StockModule } from './stock/stock.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { WatchlistModule } from './watchlist/watchlist.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, ignoreEnvFile: !IS_DEV_ENV }),
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 60 }]),
    PrismaModule,
    RedisModule,
    AuthModule,
    UserModule,
    ProviderModule,
    MailModule,
    EmailConfirmationModule,
    PasswordRecoveryModule,
    TwoFactorAuthModule,
    MarketDataModule,
    StockModule,
    PortfolioModule,
    WatchlistModule,
  ],
})
export class AppModule {}
