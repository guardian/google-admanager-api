import type { Statement } from "../../../common/types";
import type { CreativeTemplatePage } from "./creativeTemplate.type";

/**
 * Provides methods for retrieving {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeTemplateService.CreativeTemplate CreativeTemplate} objects.
 */
export interface CreativeTemplateServiceOperations {
  /**
   * Gets a {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeTemplateService.CreativeTemplatePage CreativeTemplatePage}
   * of {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeTemplateService.CreativeTemplate CreativeTemplate} objects that satisfy the given
   * {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeTemplateService.Statement#query Statement.query}.
   * The following fields are supported for filtering:
   *
   * | PQL Property         | PQL Property                                                                                                                                    |
   * | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
   * | id                   | {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeTemplateService.CreativeTemplate#id CreativeTemplate.id}                                     |
   * | name                 | {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeTemplateService.CreativeTemplate#name CreativeTemplate.name}                                 |
   * | type                 | {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeTemplateService.CreativeTemplate#type CreativeTemplate.type}                                 |
   * | status               | {@link https://developers.google.com/ad-manager/api/reference/v202405/CreativeTemplateService.CreativeTemplate#status CreativeTemplate.status} |
   *
   * @param filterStatement a Publisher Query Language statement used to filter a set of creative templates.
   * @returns the creative templates that match the given filter
   */
  getCreativeTemplatesByStatement(
    filterStatement: Statement,
  ): Promise<CreativeTemplatePage>;
}
