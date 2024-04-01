import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserQueryEntity {
  @Prop({ type: String })
  public _id: string;

  @Prop()
  public email: string;
}

export const UserQuerySchema = SchemaFactory.createForClass(UserQueryEntity);
