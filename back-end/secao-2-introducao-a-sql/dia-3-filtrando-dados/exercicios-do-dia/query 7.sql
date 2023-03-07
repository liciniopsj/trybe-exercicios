SELECT count(*) FROM store.sales
where date(order_date) between '2018-04-15' and '2019-07-30';