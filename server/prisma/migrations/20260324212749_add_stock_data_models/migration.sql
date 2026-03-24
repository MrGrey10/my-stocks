-- CreateEnum
CREATE TYPE "TickerType" AS ENUM ('STOCK', 'ETF', 'CRYPTO', 'OTHER');

-- CreateTable
CREATE TABLE "portfolios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_holdings" (
    "id" TEXT NOT NULL,
    "quantity" DECIMAL(18,8) NOT NULL,
    "avg_buy_price" DECIMAL(18,8) NOT NULL,
    "purchased_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "portfolio_id" TEXT NOT NULL,
    "ticker_id" TEXT NOT NULL,

    CONSTRAINT "portfolio_holdings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickers" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TickerType" NOT NULL,
    "exchange" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "watchlist_items" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "ticker_id" TEXT NOT NULL,

    CONSTRAINT "watchlist_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_prices" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "open" DECIMAL(18,8) NOT NULL,
    "high" DECIMAL(18,8) NOT NULL,
    "low" DECIMAL(18,8) NOT NULL,
    "close" DECIMAL(18,8) NOT NULL,
    "volume" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "ticker_id" TEXT NOT NULL,

    CONSTRAINT "daily_prices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "portfolios_user_id_idx" ON "portfolios"("user_id");

-- CreateIndex
CREATE INDEX "portfolio_holdings_portfolio_id_idx" ON "portfolio_holdings"("portfolio_id");

-- CreateIndex
CREATE INDEX "portfolio_holdings_ticker_id_idx" ON "portfolio_holdings"("ticker_id");

-- CreateIndex
CREATE UNIQUE INDEX "tickers_symbol_key" ON "tickers"("symbol");

-- CreateIndex
CREATE INDEX "watchlist_items_user_id_idx" ON "watchlist_items"("user_id");

-- CreateIndex
CREATE INDEX "watchlist_items_ticker_id_idx" ON "watchlist_items"("ticker_id");

-- CreateIndex
CREATE UNIQUE INDEX "watchlist_items_user_id_ticker_id_key" ON "watchlist_items"("user_id", "ticker_id");

-- CreateIndex
CREATE INDEX "daily_prices_ticker_id_idx" ON "daily_prices"("ticker_id");

-- CreateIndex
CREATE UNIQUE INDEX "daily_prices_ticker_id_date_key" ON "daily_prices"("ticker_id", "date");

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_holdings" ADD CONSTRAINT "portfolio_holdings_portfolio_id_fkey" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_holdings" ADD CONSTRAINT "portfolio_holdings_ticker_id_fkey" FOREIGN KEY ("ticker_id") REFERENCES "tickers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watchlist_items" ADD CONSTRAINT "watchlist_items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "watchlist_items" ADD CONSTRAINT "watchlist_items_ticker_id_fkey" FOREIGN KEY ("ticker_id") REFERENCES "tickers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_prices" ADD CONSTRAINT "daily_prices_ticker_id_fkey" FOREIGN KEY ("ticker_id") REFERENCES "tickers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
