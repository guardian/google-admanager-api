import type { Statement } from "../../../common/types";
import type { CreativeSet, CreativeSetPage } from "./creativeSet.type";

/**
 * Provides operations for creating, updating and retrieving {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSet CreativeSet} objects.
 */
export interface CreativeSetServiceOperations {
  /**
   * Creates new {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSet CreativeSet} objects.
   *
   * @param creativeSet the creative set to create
   * @returns the created creative set with their IDs filled in
   */
  createCreativeSet(creativeSet: Partial<CreativeSet>): Promise<CreativeSet>;
  /**
   * Gets a {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSetPage CreativeSetPage}
   * of {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSet CreativeSet} objects that satisfy the given
   * {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.Statement#query Statement.query}.
   * The following fields are supported for filtering:
   *
   * | PQL Property         | PQL Property                                                                                                                                    |
   * | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
   * | id                   | {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSet#id CreativeSet.id}                                     |
   * | name                 | {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSet#name CreativeSet.name}                                 |
   * | masterCreativeId     | {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSet#masterCreativeId CreativeSet.masterCreativeId}                                 |
   * | lastModifiedDateTime | {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSet#lastModifiedDateTime CreativeSet.lastModifiedDateTime} |
   *
   * @param filterStatement a Publisher Query Language statement used to filter a set of creative sets
   * @returns the creative sets that match the given filter
   */
  getCreativeSetsByStatement(
    statement: Statement,
  ): Promise<CreativeSetPage>;
  /**
   * Updates the specified {@link https://developers.google.com/ad-manager/api/reference/v202505/CreativeSetService.CreativeSet CreativeSet}.
   *
   * @param creativeSet the creative set to update
   * @returns the updated creative set
   */
  updateCreativeSet(creativeSet: CreativeSet): Promise<CreativeSet>;
}
