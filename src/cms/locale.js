const fr = {
  auth: {
    login: 'Connexion',
    loggingIn: 'Connexion...',
    loginWithNetlifyIdentity: 'Connexion',
    loginWithBitbucket: 'Login with Bitbucket',
    loginWithGitHub: 'Login with GitHub',
    loginWithGitLab: 'Login with GitLab',
    errors: {
      email: "N'oubliez pas d'entrer votre e-mail.",
      password: "N'oubliez pas d'entrer votre mot de passe.",
      identitySettings:
        'Un problème a été rencontré. Merci de réessayer ou contacter le webmaster de la SFPR.',
    },
  },
  app: {
    header: {
      content: 'Contenus',
      workflow: 'Flux',
      media: 'Images',
      quickAdd: 'Ajout rapide',
    },
    app: {
      errorHeader: 'Erreur au chargement de la configuration du CMS',
      configErrors: 'Erreurs de configuration',
      checkConfigYml: 'Vérifiez votre fichier config.yml.',
      loadingConfig: 'Chargement de la configuration...',
      waitingBackend: 'En attente du serveur...',
    },
    notFoundPage: { header: 'Introuvable' },
  },
  collection: {
    sidebar: {
      collections: 'Collections',
      allCollections: 'Toutes les collections',
      searchAll: 'Tout rechercher',
      searchIn: 'Rechercher dans',
    },
    collectionTop: {
      sortBy: 'Trier par...',
      viewAs: 'Voir comme',
      newButton: 'Créer un %{collectionLabel}',
      ascending: 'Ascendant',
      descending: 'Descendant',
      searchResults: 'Résultats pour "%{searchTerm}"',
      searchResultsInCollection:
        'Résultats pour "%{searchTerm}" dans %{collection}',
      filterBy: 'Filtrer par...',
    },
    entries: {
      loadingEntries: 'Chargement des entrées',
      cachingEntries: 'Mise en cache des entrées',
      longerLoading: 'Cela peut prendre quelques minutes',
      noEntries: 'No Entries',
    },
    defaultFields: {
      author: { label: 'Auteur' },
      updatedOn: { label: 'Mis à jour le' },
    },
  },
  editor: {
    editorControl: { field: { optional: 'optionnel' } },
    editorControlPane: {
      widget: {
        required: 'Le champ %{fieldLabel} est requis.',
        regexPattern:
          'Le champ %{fieldLabel} ne correspond pas au schéma: %{pattern}.',
        processing: 'Le champ %{fieldLabel} est en cours de traitement.',
        range:
          'Le champ %{fieldLabel} doit être compris entre %{minValue} et %{maxValue}.',
        min:
          'Le champ %{fieldLabel} doit avoir une valeur de %{minValue} ou plus.',
        max:
          'Le champ %{fieldLabel} doit avoir une valeur de %{maxValue} ou moins.',
        rangeCount:
          '%{fieldLabel} must have between %{minCount} and %{maxCount} item(s).',
        rangeCountExact: '%{fieldLabel} must have exactly %{count} item(s).',
        minCount: '%{fieldLabel} must be at least %{minCount} item(s).',
        maxCount: '%{fieldLabel} must be %{maxCount} or less item(s).',
        invalidPath: "'%{path}' is not a valid path",
        pathExists: "Path '%{path}' already exists",
      },
    },
    editor: {
      onLeavePage: 'Voulez-vous vraiment quitter cette page ?',
      onUpdatingWithUnsavedChanges:
        'Veuillez enregistrer vos modifications avant de mettre à jour le statut.',
      onPublishingNotReady:
        'Veuillez mettre à jour le statut à "Prêt" avant de publier.',
      onPublishingWithUnsavedChanges:
        'Veuillez enregistrer vos modifications avant de publier.',
      onPublishing: 'Voulez-vous vraiment publier cette entrée ?',
      onUnpublishing: 'Are you sure you want to unpublish this entry?',
      onDeleteWithUnsavedChanges:
        'Voulez-vous vraiment supprimer cette entrée publiée ainsi que vos modifications non enregistrées de cette session ?',
      onDeletePublishedEntry:
        'Voulez-vous vraiment supprimer cette entrée publiée ?',
      onDeleteUnpublishedChangesWithUnsavedChanges:
        'Ceci supprimera toutes les modifications non publiées de cette entrée ainsi que vos modifications non enregistrées de cette session. Voulez-vous toujours supprimer ?',
      onDeleteUnpublishedChanges:
        'Toutes les modifications non publiées de cette entrée seront supprimées. Voulez-vous toujours supprimer ?',
      loadingEntry: "Chargement de l'entrée...",
      confirmLoadBackup:
        "Une sauvegarde locale a été trouvée pour cette entrée. Voulez-vous l'utiliser",
    },
    editorToolbar: {
      publishing: 'Publication...',
      publish: 'Publier',
      published: 'Publiée',
      unpublish: 'Supprimer',
      duplicate: 'Dupliquer',
      unpublishing: 'Unpublishing...',
      publishAndCreateNew: 'Publier et créer une nouvelle entrée',
      publishAndDuplicate: "Publier et dupliquer l'entrée",
      deleteUnpublishedChanges: 'Supprimer les modications non publiées',
      deleteUnpublishedEntry: "Supprimer l'entrée non publiée",
      deletePublishedEntry: "Supprimer l'entrée publiée",
      deleteEntry: "Supprimer l'entrée",
      saving: 'Enregistrement...',
      save: 'Enregistrer',
      deleting: 'Suppression...',
      updating: 'Mise à jour...',
      setStatus: 'Définir le statut',
      backCollection: 'Retour aux %{collectionLabel}',
      unsavedChanges: 'Modifications non enregistrées',
      changesSaved: 'Modifications enregistrées',
      draft: 'Brouillon',
      inReview: 'En cours de révision',
      ready: 'Prêt',
      publishNow: 'Publier maintenant',
      deployPreviewPendingButtonLabel: "Vérifier l'aperçu",
      deployPreviewButtonLabel: "Voir l'aperçu",
      deployButtonLabel: 'Voir en direct',
    },
    editorWidgets: {
      markdown: { richText: 'Texte normal', markdown: 'Texte encodé' },
      image: {
        choose: 'Choisissez une image',
        chooseDifferent: 'Choisissez une image différente',
        remove: "Supprimer l'image",
      },
      file: {
        choose: 'Choisissez un fichier',
        chooseDifferent: 'Choisissez un fichier différent',
        remove: 'Effacer le fichier',
      },
      unknownControl: {
        noControl: "Pas de contrôle pour le gadget '%{widget}'.",
      },
      unknownPreview: { noPreview: "Pas d'aperçu pour le gadget '%{widget}'." },
      headingOptions: {
        headingOne: 'Titre principal',
        headingTwo: 'Titre secondaire',
        headingThree: 'Sous-titre',
        headingFour: 'Heading 4',
        headingFive: 'Heading 5',
        headingSix: 'Heading 6',
      },
      datetime: { now: 'Date du jour' },
    },
  },
  mediaLibrary: {
    mediaLibraryCard: { draft: 'Brouillon' },
    mediaLibrary: {
      onDelete: 'Voulez-vous vraiment supprimer la ressource sélectionnée ?',
      fileTooLarge:
        'File too large.\nConfigured to not allow files greater than %{size} kB.',
    },
    mediaLibraryModal: {
      loading: 'Chargement...',
      noResults: 'Aucun résultat.',
      noAssetsFound: 'Aucune ressource trouvée.',
      noImagesFound: 'Aucune image trouvée.',
      private: 'Privé ',
      images: 'Images',
      mediaAssets: 'Ressources',
      search: 'Recherche...',
      uploading: 'Téléversement...',
      upload: 'Téléverser une nouvelle ressource',
      download: 'Download',
      deleting: 'Suppression...',
      deleteSelected: 'Supprimer les éléments sélectionnés',
      chooseSelected: 'Choisir les éléments sélectionnés',
    },
  },
  ui: {
    default: { goBackToSite: 'Retour au site' },
    errorBoundary: {
      title: 'Erreur',
      details: 'Une erreur est survenue, veuillez ',
      reportIt: 'la signaler.',
      detailsHeading: 'Détails',
      privacyWarning:
        'Opening an issue pre-populates it with the error message and debugging data.\nPlease verify the information is correct and remove sensitive data if exists.',
      recoveredEntry: {
        heading: 'Document récupéré',
        warning:
          'Veuillez copier/coller ceci quelque part avant de naviguer ailleurs!',
        copyButtonLabel: 'Copier dans le presse-papier',
      },
    },
    settingsDropdown: { logOut: 'Déconnexion' },
    toast: {
      onFailToLoadEntries: "Échec du chargement de l'entrée: %{details}",
      onFailToLoadDeployPreview: "Échec du chargement de l'aperçu: %{details}",
      onFailToPersist: "Échec de l'enregistrement de l'entrée: %{details}",
      onFailToDelete: "Échec de la suppression de l'entrée: %{details}",
      onFailToUpdateStatus: 'Échec de la mise à jour du statut: %{details}',
      missingRequiredField:
        'Oops, il manque un champ requis. Veuillez le renseigner avant de soumettre.',
      entrySaved: 'Entrée enregistrée',
      entryPublished: 'Entrée publiée',
      entryUnpublished: 'Entry unpublished',
      onFailToPublishEntry: 'Échec de la publication: %{details}',
      onFailToUnpublishEntry: 'Failed to unpublish entry: %{details}',
      entryUpdated: "Statut de l'entrée mis à jour",
      onDeleteUnpublishedChanges: 'Modifications non publiées supprimées',
      onFailToAuth: '%{details}',
      onLoggedOut:
        'You have been logged out, please back up any data and login again',
      onBackendDown:
        'The backend service is experiencing an outage. See %{details} for more information',
    },
  },
  workflow: {
    workflow: {
      loading: 'Chargement des entrées du flux éditorial',
      workflowHeading: 'Flux éditorial',
      newPost: 'Nouvel article',
      description:
        '%{smart_count} entrée en attente de revue, %{readyCount} prête(s) à être publiée(s). |||| %{smart_count} entrées en attente de revue, %{readyCount} prête(s) à être publiée(s). ',
      dateFormat: 'MMMM D',
    },
    workflowCard: {
      lastChange: '%{date} par %{author}',
      lastChangeNoAuthor: '%{date}',
      lastChangeNoDate: 'par %{author}',
      deleteChanges: 'Supprimer les mofications',
      deleteNewEntry: 'Supprimer la nouvelle entrée',
      publishChanges: 'Publier les modifications',
      publishNewEntry: 'Publier la nouvelle entrée',
    },
    workflowList: {
      onDeleteEntry: 'Voulez-vous vraiment supprimer cette entrée ?',
      onPublishingNotReadyEntry:
        'Seul les éléments ayant le statut "Prêt" peuvent être publiés. Veuillez glisser/déposer la carte dans la colonne "Prêt" pour activer la publication',
      onPublishEntry: 'Voulez-vous vraiment publier cette entrée ?',
      draftHeader: 'Brouillons',
      inReviewHeader: 'En cours de révision',
      readyHeader: 'Prêt',
      currentEntries: '%{smart_count} entrée |||| %{smart_count} entrées',
    },
  },
}

export default fr
