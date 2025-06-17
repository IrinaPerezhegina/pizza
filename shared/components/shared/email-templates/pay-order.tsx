interface Props {
  orderId: number;
  totalAmount: number;
  paymontUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymontUrl,
}) => (
  <div>
    <h1>Заказ #{orderId} </h1>
    <p>
      Оплатите заказ на сумму {totalAmount} ₽. Перейдите{" "}
      <a href={paymontUrl}>по этой ссылке</a> для оплаты заказа.
    </p>
  </div>
);
