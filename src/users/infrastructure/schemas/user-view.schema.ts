import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

const USER_VIEW_COLLECTION = 'usersView';
@Schema({
  collection: USER_VIEW_COLLECTION,
})
export class UserViewEntity {
  @Prop({ type: String })
  public _id: string;

  @Prop()
  public email: string;
}

export const UserViewSchema = SchemaFactory.createForClass(UserViewEntity);
