import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

const USER_VIEW_COLLECTION = 'usersView';

@Schema()
class UserIndicator {
  @Prop({ type: String })
  public _id: string;

  @Prop()
  public name: string;

  @Prop()
  public value: number;
}

const UserIndicatorSchema = SchemaFactory.createForClass(UserIndicator);

@Schema({
  collection: USER_VIEW_COLLECTION,
})
export class UserViewEntity {
  @Prop({ type: String })
  public _id: string;

  @Prop()
  public email: string;

  @Prop({ type: [UserIndicatorSchema] })
  public indicators: UserIndicator[];
}

export const UserViewSchema = SchemaFactory.createForClass(UserViewEntity);
