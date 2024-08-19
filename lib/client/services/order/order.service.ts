import type { Client } from "soap";
import type { Statement, UpdateResult } from "../../../common/types";
import type { OrderAction } from "./order.action";
import type { Order, OrderPage } from "./order.type";
import type { OrderServiceOperations } from "./orderService.interface";

export class OrderService implements OrderServiceOperations {
  private _client: Client;

  constructor(client: Client) {
    this._client = client;
  }

  async createOrders(orders: Order[]): Promise<Order[]> {
    return this._client.createOrders({ orders });
  }

  async getOrdersByStatement(filterStatement: Statement): Promise<OrderPage> {
    return this._client.getOrdersByStatement({
      filterStatement,
    });
  }

  async performOrderAction(
    orderAction: OrderAction,
    filterStatement: Statement,
  ): Promise<UpdateResult> {
    return this._client.performOrderAction({
      orderAction: {
        attributes: {
          "xsi:type": orderAction.constructor.name,
        },
        ...orderAction.buildAttributes(),
      },
      filterStatement,
    });
  }

  async updateOrders(orders: Order[]): Promise<Order[]> {
    return this._client.updateOrders({ orders });
  }
}
